const { createApp } = Vue

const app =  createApp ({
    data() {
        return {
            message: "Hello world I am using vue!",
            imgSrc: "//res.cloudinary.com/practicaldev/image/fetch/s--I4FWon9Y--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg"
        }
    }
})

app.mount("#app")