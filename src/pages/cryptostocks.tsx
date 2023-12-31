import Head from 'next/head';
import CryptoVsStockView from '@/components/views/CryptoVsStock';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();

  const searchCryptoSymbol = searchParams.get('cryptoSymbol');
  const searchStockSymbol = searchParams.get('stockSymbol');

  return (
    <>
      <Head>
        <title>
          {searchCryptoSymbol} vs {searchStockSymbol}
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CryptoVsStockView />
    </>
  );
}
