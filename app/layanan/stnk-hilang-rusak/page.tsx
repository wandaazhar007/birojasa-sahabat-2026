import { servicesData } from "@/app/lib/services/data";
import { buildServiceMetadata } from "@/app/lib/services/metadata";
import ServicePage from "@/app/components/servicePage/ServicePage";

const data = servicesData["stnk-hilang-rusak"];

export const metadata = buildServiceMetadata(data);

export default function StnkHilangRusakPage() {
  return <ServicePage data={data} />;
}
