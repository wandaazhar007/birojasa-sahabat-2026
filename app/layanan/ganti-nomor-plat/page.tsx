import { servicesData } from "@/app/lib/services/data";
import { buildServiceMetadata } from "@/app/lib/services/metadata";
import ServicePage from "@/app/components/servicePage/ServicePage";

const data = servicesData["ganti-nomor-plat"];

export const metadata = buildServiceMetadata(data);

export default function GantiNomorPlatPage() {
  return <ServicePage data={data} />;
}
