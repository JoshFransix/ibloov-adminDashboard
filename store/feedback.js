// holds your root state
export const state = () => ({
  feedbackData2: [
    {
      id: 8,
      name: "Joshua Fransix",
      image: "landingImage.png",
      email: "test256@gmail.com",
      phoneNumber: "09012276905",
      date: "25/05/2022",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos impedit consequuntur ipsam      aspernatur quasi quae, possimus harum autem animi.",
      star: 4,
      time: "yesterday",
      all: "all"
    },
    {
      id: 9,
      name: "David Beckham",
      image: "landingImage.png",
      email: "good@ymail.com",
      phoneNumber: "08011123411",
      date: "12/03/2019",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos impedit consequuntur ipsam      aspernatur quasi quae, possimus harum autem animi.",
      star: 5,
      time: "tomorrow",
      all: "all"

    },
    {
      id: 10,
      name: "Michael Bosco",
      image: "landingImage.png",
      email: "mikey@outlook.com",
      phoneNumber: "07134676432",
      date: "15/08/2002",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos impedit consequuntur ipsam      aspernatur quasi quae, possimus harum autem animi.",
      star: 3,
      time: "yesterday",
      all: "all"

    },
    {
      id: 11,
      name: "Nina Dobrev",
      image: "landingImage.png",
      email: "nina26@ggg.com",
      phoneNumber: "09122734863",
      date: "01/10/2014",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos impedit consequuntur ipsam      aspernatur quasi quae, possimus harum autem animi.",
      star: 3,
      time: "today",
      all: "all"

    },
    {
      id: 12,
      name: "Nina Dobrev",
      image: "landingImage.png",
      email: "nina26@ggg.com",
      phoneNumber: "09122734863",
      date: "01/10/2014",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos impedit consequuntur ipsam      aspernatur quasi quae, possimus harum autem animi.",
      star: 1,
      time: "tomorrow",
      all: "all"

    },
    {
      id: 13,
      name: "Nina Dobrev",
      image: "landingImage.png",
      email: "nina26@ggg.com",
      phoneNumber: "09122734863",
      date: "01/10/2014",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos impedit consequuntur ipsam      aspernatur quasi quae, possimus harum autem animi.",
      star: 2,
      time: "today",
      all: "all"

    },
    {
      id: 14,
      name: "Nina Dobrev",
      image: "landingImage.png",
      email: "nina26@ggg.com",
      phoneNumber: "09122734863",
      date: "01/10/2014",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos impedit consequuntur ipsam      aspernatur quasi quae, possimus harum autem animi.",
      star: 5,
      time: "today",
      all: "all"

    },
    {
      id: 15,
      name: "Xander Cage",
      image: "landingImage.png",
      email: "xander@ggg.com",
      phoneNumber: "09122734863",
      date: "01/10/2014",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos impedit consequuntur ipsam      aspernatur quasi quae, possimus harum autem animi.",
      star: 5,
      time: "tomorrow",
      all: "all"

    },
    {
      id: 16,
      name: "Nina Dobrev",
      image: "landingImage.png",
      email: "nina26@ggg.com",
      phoneNumber: "09122734863",
      date: "01/10/2014",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos impedit consequuntur ipsam      aspernatur quasi quae, possimus harum autem animi.",
      star: 4,
      time: "tomorrow",
      all: "all"

    },
    {
      id: 17,
      name: "Dave Mikels",
      image: "landingImage.png",
      email: "dmikels@ggg.com",
      phoneNumber: "09122734863",
      date: "01/10/2014",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos impedit consequuntur ipsam      aspernatur quasi quae, possimus harum autem animi.",
      star: 5,
      time: "tomorrow",
      all: "all"
    }
  ]

})

// your root getters
export const getters = {
  displayFeedback(state) {
    return state.feedbackData2
  }
}

// contains your actions
export const actions = {

}
// contains your mutations
export const mutations = {

}
