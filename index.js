const Replicate = require("replicate");
const axios = require("axios")
const replicate = new Replicate({
    // get your token from https://replicate.com/account
    auth: "349f1ac01b16233825d61fdf5fd9bd87118c6e99",
});

const result = async () => {
    try {
        const output = await replicate.run(
            "yuval-alaluf/sam:9222a21c181b707209ef12b5e0d7e94c994b58f01c7b2fec075d2e892362f13c",
            {
                input: {
                    image: "https://replicate.delivery/mgxm/806bea64-bb51-4c8a-bf4d-15602eb60fdd/1287.jpg",
                    target_age: "100"
                }
            }
        );
        console.log(output)
    }
    catch (err) {
        console.error(err)
    }
}
result()