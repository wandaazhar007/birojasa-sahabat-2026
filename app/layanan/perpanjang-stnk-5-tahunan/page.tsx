import { servicesData } from "@/app/lib/services/data";
import { buildServiceMetadata } from "@/app/lib/services/metadata";
import ServicePage from "@/app/components/servicePage/ServicePage";

const data = servicesData["perpanjang-stnk-5-tahunan"];

export const metadata = buildServiceMetadata(data);

export default function PerpanjangStnk5TahunanPage() {
  return <ServicePage data={data} />;
}
