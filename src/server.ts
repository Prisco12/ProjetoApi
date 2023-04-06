import app from "./app";


function main(){
    try {
        app.listen(3000,'localhost',async () => {
            console.log('Starting Server')
        })
    } catch (error) {
        console.error('Starting server error',error);
    }
}

main()