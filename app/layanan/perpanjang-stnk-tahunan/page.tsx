import { servicesData } from "@/app/lib/services/data";
import { buildServiceMetadata } from "@/app/lib/services/metadata";
import ServicePage from "@/app/components/servicePage/ServicePage";

const data = servicesData["perpanjang-stnk-tahunan"];

export const metadata = buildServiceMetadata(data);

export default function PerpanjangStnkTahunanPage() {
  return <ServicePage data={data} />;
}
