import { servicesData } from "@/app/lib/services/data";
import { buildServiceMetadata } from "@/app/lib/services/metadata";
import ServicePage from "@/app/components/servicePage/ServicePage";

const data = servicesData["plat-custom"];

export const metadata = buildServiceMetadata(data);

export default function PlatCustomPage() {
  return <ServicePage data={data} />;
}
