
  const PRICES_ENDPOINT = 'https://api.porssisahko.net/v1/latest-prices.json'
    const PRICE_ENDPOINT = 'https://api.porssisahko.net/v1/price.json';
    const dateAndTimeNow = new Date();
    const date = dateAndTimeNow.toISOString().split('T')[0];
    const hour = dateAndTimeNow.getHours();

async function pricesList(){
  const response = await fetch(`${PRICES_ENDPOINT}?date=${date}&hour=${hour}`);
  const { prices } = await response.json();
  const priceData = (Object.keys(prices).map(key => prices[key].price.toFixed(2) + '/' + prices[key].startDate.split('T')[0] + ' '))
  return(
    <>
    {priceData}
    </>
)}

async function priceNow(){
  const response = await fetch(`${PRICE_ENDPOINT}?date=${date}&hour=${hour}`);
  const { price } = await response.json();
return(
  <>
      <p>Tänään on {date}</p>
      <p>Hinta nyt: {price.toFixed(2)}</p>
  </>
)}

async function priceNextHour(){
  const nextHour = (dateAndTimeNow.getHours()+1);
  const response = await fetch(`${PRICE_ENDPOINT}?date=${date}&hour=${nextHour}`);
  const { price } = await response.json();
return(
  <>
    <p>Hinta tunnin päästä: {price.toFixed(2)}</p>
  </>
)}

    const Home = async () => {
    return(
        <div className='px-7'>
          {priceNow()}
          {priceNextHour()}
          <p></p>
          {pricesList()}
        </div>
)}
    export default Home