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
                    image: "https://bcoder-dev-bucket.s3.amazonaws.com/couchvibes/dev/ed2112a187949a720aecac653d0dc7cf77171e39.jfif",
                    target_age: "40"
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