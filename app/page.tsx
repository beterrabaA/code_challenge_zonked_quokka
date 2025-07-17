import { Formater } from "@/components/Formarter";

export default async function Home() {
  const data = await fetch("https://open.er-api.com/v6/latest/USD");
  const response = await data.json();

  const values = Object.keys(response.rates);

  console.log(values);

  return <Formater values={values} raw={response.rates} />;
}
