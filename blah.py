from enum import Enum
import json

class Type(str, Enum):
    START = "START"
    END = "END"
    LONG = "LONG"
    SINGLE = "SINGLE"


class Difficulty(str, Enum):
    FUNDAMENTALS = "FUNDAMENTALS"
    EASY = "EASY"
    MEDIUM = "MEDIUM"
    HARD = "HARD"


tricks = [
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/clicker.html",
        "type": Type.SINGLE,
        "difficulty": Difficulty.FUNDAMENTALS,
        "word": "yes",
        "gesture": "head rub"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/name.html",
        "type": Type.SINGLE,
        "difficulty": Difficulty.FUNDAMENTALS,
        "word": "<name>",
        "gesture": "wave to come over"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/touch.html",
        "type": Type.START,
        "difficulty": Difficulty.FUNDAMENTALS,
        "word": "touch",
        "gesture": "tap where to touch"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/sit.html",
        "type": Type.START,
        "difficulty": Difficulty.EASY,
        "word": "sit",
        "gesture": "point down with 2 fingers"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/down.html",
        "type": Type.START,
        "difficulty": Difficulty.EASY,
        "word": "down",
        "gesture": "push hand down"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/stand.html",
        "type": Type.START,
        "difficulty": Difficulty.EASY,
        "word": "stand",
        "gesture": "push hand up"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/release.html",
        "type": Type.END,
        "difficulty": Difficulty.FUNDAMENTALS,
        "word": "ok",
        "gesture": "wave them like name"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/come.html",
        "type": Type.END,
        "difficulty": Difficulty.FUNDAMENTALS,
        "word": "come",
        "gesture": "clap continuously"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/stay.html",
        "type": Type.START,
        "difficulty": Difficulty.EASY,
        "word": "stay",
        "gesture": "stop sign"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/heel.html",
        "type": Type.START,
        "difficulty": Difficulty.FUNDAMENTALS,
        "word": "heel",
        "gesture": "point to heel with hand, not just finger"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/takeit.html",
        "type": Type.LONG,
        "difficulty": Difficulty.MEDIUM,
        "word": "take",
        "gesture": "point"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/leaveit.html",
        "type": Type.SINGLE,
        "difficulty": Difficulty.FUNDAMENTALS,
        "word": "leave",
        "gesture": "wave like slapping away"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/learnnames.html",
        "type": Type.LONG,
        "difficulty": Difficulty.MEDIUM,
        "word": "get <item>",
        "gesture": "point <item>"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/bell.html",
        "type": Type.SINGLE,
        "difficulty": Difficulty.EASY,
        "word": "bell",
        "gesture": "get their paw to hit bell"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/park.html",
        "type": Type.SINGLE,
        "difficulty": Difficulty.MEDIUM,
        "word": "park",
        "gesture": "fist pointing to area"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/leap.html",
        "type": Type.SINGLE,
        "difficulty": Difficulty.EASY,
        "word": "jump",
        "gesture": "point over something"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/spin.html",
        "type": Type.START,
        "difficulty": Difficulty.MEDIUM,
        "word": "spin",
        "gesture": "circular motion"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/paw.html",
        "type": Type.START,
        "difficulty": Difficulty.EASY,
        "word": "paw",
        "gesture": "put hand out"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/shake.html",
        "type": Type.START,
        "difficulty": Difficulty.MEDIUM,
        "word": "shake",
        "gesture": "use fist and shake around"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/rollover.html",
        "type": Type.SINGLE,
        "difficulty": Difficulty.EASY,
        "word": "rollover",
        "gesture": "circular motion"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/sitpretty.html",
        "type": Type.START,
        "difficulty": Difficulty.MEDIUM,
        "word": "beg",
        "gesture": "put hands together like begging"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/speak.html",
        "type": Type.START,
        "difficulty": Difficulty.MEDIUM,
        "word": "bark",
        "gesture": "1 hand like its barking"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/hush.html",
        "type": Type.SINGLE,
        "difficulty": Difficulty.MEDIUM,
        "word": "hush",
        "gesture": "hand barking but is closed together"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/tug.html",
        "type": Type.START,
        "difficulty": Difficulty.EASY,
        "word": "tug",
        "gesture": "Have item and pull on it"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/fetch.html",
        "type": Type.LONG,
        "difficulty": Difficulty.MEDIUM,
        "word": "fetch",
        "gesture": "throw an item"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/back.html",
        "type": Type.START,
        "difficulty": Difficulty.MEDIUM,
        "word": "back",
        "gesture": "wave them away"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/yawn.html",
        "type": Type.SINGLE,
        "difficulty": Difficulty.MEDIUM,
        "word": "yawn",
        "gesture": "stretched like you're tired"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/findit.html",
        "type": Type.LONG,
        "difficulty": Difficulty.MEDIUM,
        "word": "find",
        "gesture": "point to an object in hand"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/catch.html",
        "type": Type.SINGLE,
        "difficulty": Difficulty.MEDIUM,
        "word": "catch",
        "gesture": "throw object at them"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/leftright.html",
        "type": Type.START,
        "difficulty": Difficulty.MEDIUM,
        "word": "left/right",
        "gesture": "heel but with that hand"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/weave.html",
        "type": Type.START,
        "difficulty": Difficulty.HARD,
        "word": "weave",
        "gesture": "point around things"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/bow.html",
        "type": Type.SINGLE,
        "difficulty": Difficulty.EASY,
        "word": "bow",
        "gesture": "bow yourself"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/jumprope.html",
        "type": Type.START,
        "difficulty": Difficulty.HARD,
        "word": "jump rope",
        "gesture": "get a jump rope"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/limp.html",
        "type": Type.START,
        "difficulty": Difficulty.HARD,
        "word": "limp",
        "gesture": "Limp yourself"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/crawl.html",
        "type": Type.START,
        "difficulty": Difficulty.MEDIUM,
        "word": "crawl",
        "gesture": "crawl motion on hand"
    },
    {
        "link": "http://www.doggiebuddy.com/topics/tricks/bang.html",
        "type": Type.START,
        "difficulty": Difficulty.HARD,
        "word": "bang",
        "gesture": "gun hand"
    },
    {
        "link": "https://www.thesprucepets.com/train-a-dog-to-give-kisses-1117291",
        "type": Type.START,
        "difficulty": Difficulty.MEDIUM,
        "word": "kiss",
        "gesture": "point to cheek"
    },
    {
        "link": "https://www.rover.com/blog/how-to-teach-a-dog-to-high-five-and-impress-all-your-guests/",
        "type": Type.SINGLE,
        "difficulty": Difficulty.HARD,
        "word": "high five",
        "gesture": "high five moving arm"
    },
    {
        "link": "https://www.thesprucepets.com/train-your-dog-to-wave-1117301",
        "type": Type.START,
        "difficulty": Difficulty.HARD,
        "word": "wave",
        "gesture": "wave"
    },
    {
        "link": "https://www.dummies.com/pets/dogs/how-to-train-your-dog-to-give-a-hug/",
        "type": Type.START,
        "difficulty": Difficulty.HARD,
        "word": "hug",
        "gesture": "give them a hug"
    },
    {
        "link": "https://www.wikihow.com/Teach-Your-Dog-to-Dance",
        "type": Type.LONG,
        "difficulty": Difficulty.HARD,
        "word": "dance",
        "gesture": "2 fingers pointing in the air back and forth"
    },
    {
        "link": "https://www.rover.com/blog/how-to-teach-dog-to-clean-up-toys/",
        "type": Type.LONG,
        "difficulty": Difficulty.HARD,
        "word": "cleanup",
        "gesture": "clap twice"
    },
    {
        "link": "https://www.akc.org/expert-advice/training/teach-your-dog-to-do-a-handstand/",
        "type": Type.START,
        "difficulty": Difficulty.HARD,
        "word": "handstand",
        "gesture": "push against a wall"
    },
    {
        "link": "https://www.akc.org/expert-advice/training/teach-your-dog-to-play-peekaboo/",
        "type": Type.START,
        "difficulty": Difficulty.HARD,
        "word": "peekaboo",
        "gesture": "peekaboo with your hands"
    },
    {
        "link": "https://www.dogingtonpost.com/how-to-train-your-dog-to-bring-you-a-beer/",
        "type": Type.LONG,
        "difficulty": Difficulty.HARD,
        "word": "drink",
        "gesture": "drinking motion"
    }
]
tricks_word = set()
for trick in tricks:
    try:
        if trick["word"] not in tricks_word:
            tricks_word.add(trick["word"])
        else:
            print("Issue", trick)
    except:
        print("Issue", trick)
json.dump(tricks, open('tricks.json', "w+"))
