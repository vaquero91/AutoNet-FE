const state = {
    tweets: [
        {
            fecha: "15/09/2020",
            body: "Hola mundo",
            rts: 15,
            favs: 25,
        },
        {
            fecha: "15/09/2020",
            body: "Hello world(Hola mundo en ingles)",
            rts: 15,
            favs: 25,
        }
    ]
};
const getters = {
    allTweets: (state) => state.tweets
};
const actions = { // Llamadas al backend

};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations,
}