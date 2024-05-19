import { writable} from 'svelte/store'

export const FeedbackStore = writable([
    {
        id:1,
        rating: 8,
        text: 'Lorem Ipsum has been the industrys standard dummy text ever and scrambled it to make a type specimen book. It has survived not'
    },
    {
        id:2,
        rating: 10,
        text: "Lorem Ipsum has been the industry's standard dummy text ever an."
    },
    {
        id:3,
        rating: 7,
        text: "Lorem Ipsum has been the industry's standard dummy text ever and scrambled it to make a type specimen book. It has survived not ."
    },
    {
        id:4,
        rating: 9,
        text: "Lorem Ipsum has been the  make a type specimen book. It has survived not ."
    }
]);