from telethon.sync import TelegramClient
from telethon.tl.functions.messages import GetHistoryRequest
from telethon.tl.types import InputPeerChannel
from telethon.errors.rpcerrorlist import PeerFloodError
from googletrans import Translator

# Replace these values with your own
api_id = 'Id'
api_hash = 'hash'
phone_number = 'No'
channel_usernames = ['tikvahethiopia', 'Daily_News_Ethiopian', 'EBCNEWSNOW', 'Ethiopianbusinessdaily'] #add more if needed

client = TelegramClient('session_name', api_id, api_hash)

async def main():
    await client.start(phone_number)

    translator = Translator()

    with open("telegram_messages_translated.txt", "w", encoding="utf-8") as file:
        for channel_username in channel_usernames:
            try:
                channel = await client.get_input_entity(channel_username)
                messages = await client(GetHistoryRequest(
                    peer=channel,
                    limit=1,  # Number of messages to retrieve
                    offset_date=None,
                    offset_id=0,
                    max_id=0,
                    min_id=0,
                    add_offset=0,
                    hash=0
                ))

                for message in messages.messages:
                    if message.message:
                        if message.from_id is None:
                            sender_username = "Channel or Bot"
                        else:
                            sender = await client.get_entity(message.from_id)
                            sender_username = sender.username if sender.username else "Unknown"
                        
                        # Detect language and translate message to English
                        translation = translator.translate(message.message, dest='en')
                        
                        file.write("Channel: {}\n".format(channel_username))
                        file.write("Sender: {}\n".format(sender_username))
                        file.write("Date: {}\n".format(message.date))
                        file.write("Original Message: {}\n".format(message.message))
                        file.write("Translated Message: {}\n\n".format(translation.text))

            except PeerFloodError:
                print("Getting too many requests from Telegram servers. Try again later.")
try:
    client.loop.run_until_complete(main())
finally:
    client.disconnect()
