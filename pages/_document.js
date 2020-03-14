import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
                    />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>

                {/* 
                    ONLY USE GLOBAL HERE FOR THESE TOP LEVEL THINGS
                    USUALLY YOU JUST WANT IT TO SAY JSX
                */}

                <style jsx global>{`
                 @font-face {
                            font-family: 'NowText';
                            src: url('/fonts/Monotype-HelveticaNowText.otf');
                         
                    }
                 @font-face {
                        font-family: 'NowTextBold';
                        src: url('/fonts/Monotype-HelveticaNowTextBold.otf');
                        
                }

                body {
                    font-family:'NowText';
                    margin:0;
                    padding:0;
                    }


   
          
           

                    
                `}</style>
            </Html>
        )
    }
}

export default MyDocument