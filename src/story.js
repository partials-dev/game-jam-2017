[
  {
    "title": "Start",
    "id": "start C1",
    "left": {
      "link": "forest fork C2A",
      "text": "Go Left"
    },
    "right": {
      "link": "forest dead end C2B",
      "text": "Go Right"
    },
    "body": "Two roads, one less traveled..."
  },
  {
    "title": "Forest Fork",
    "id": "forest fork C2A",
    "left": {
      "link": "character C3A",
      "text": "Go Left"
    },
    "right": {
      "link": "temple entrance C3B",
      "text": "Go Right"
    },
    "body": "A fork in the path"
  },
  {
    "title": "Forest Dead End",
    "id": "forest dead end C2B",
    "left": {
      "link": "start C1",
      "text": "Turn Around"
    },
    "right": {
      "link": "start C1",
      "text": "Turn Around"
    },
    "body": "Nowhere to go"
  },
  {
    "title": "Character",
    "id": "character C3A",
    "left": {
      "link": "forest fork C2A",
      "text": "Turn Around"
    },
    "right": {
      "link": "forest fork C2A",
      "text": "Turn Around"
    },
    "body": "You meet a guy"
  },
  {
    "title": "Temple Entrance",
    "id": "temple entrance C3B",
    "left": {
      "link": "temple fork C4",
      "text": "Go Forward"
    },
    "right": {
      "link": "temple fork C4",
      "text": "Go Forward"
    },
    "body": "Ancient sentient music box creature"
  },
  {
    "title": "Temple Fork",
    "id": "temple fork C4",
    "left": {
      "link": "temple dead end C5A",
      "text": "Go Left"
    },
    "right": {
      "link": "temple fork 2 C5B",
      "text": "Go Right"
    },
    "body": "Creaking gears and leaking winds"
  },
  {
    "title": "Temple Dead End",
    "id": "temple dead end C5A",
    "left": {
      "link": "temple fork C4",
      "text": "Turn Around"
    },
    "right": {
      "link": "temple fork C4",
      "text": "Turn Around"
    },
    "body": "Ancient sentient music box creature"
  },
  {
    "title": "Temple Fork 2",
    "id": "temple fork 2 C5B",
    "left": {
      "link": "locked door C6A",
      "text": "Turn Left"
    },
    "right": {
      "link": "switch C6B",
      "text": "Turn Right"
    },
    "body": "An interesting choice"
  },
  {
    "title": "Locked Door",
    "id": "locked door C6A",
    "left": {
      "link": "temple hallway C7",
      "text": "Go Through the Door"
    },
    "right": {
      "link": "temple hallway C7",
      "text": "Go through the door"
    },
    "body": "The way forward is closed"
  },
  {
    "title": "Unlocked Door",
    "id": "unlocked door C6A",
    "left": {
      "link": "temple hallway C7",
      "text": "Go Through the Door"
    },
    "right": {
      "link": "temple hallway C7",
      "text": "Go through the door"
    },
    "body": "The way forward is open"
  },
  {
    "title": "Switch",
    "id": "switch C6B",
    "left": {
      "link": "temple fork 2 C5B",
      "text": "Turn Around"
    },
    "right": {
      "link": "temple fork 2 C5B",
      "text": "Turn Around"
    },
    "song": {
      "replaceRoom": "locked door C6A",
      "with": "unlocked door C6A"
    },
    "body": "The way forward is closed"
  },
  {
    "title": "Temple Hallway",
    "id": "temple hallway C7",
    "left": {
      "link": "heart room C8",
      "text": "Go Forward"
    },
    "right": {
      "link": "heart room C8",
      "text": "Go Forward"
    },
    "body": "You hear music playing..."
  },
  {
    "title": "Heart Room",
    "id": "heart room C8",
    "left": {
      "link": null,
      "text": "Learn the song"
    },
    "right": {
      "link": null,
      "text": "Learn the song"
    },
    "body": "You learn a song"
  }
]