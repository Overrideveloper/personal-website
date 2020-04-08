import { createStore } from "@stencil/store";

const { get, set } = createStore({
    posts: [],
    projects: [],
    talks: []
});

export default { get, set };