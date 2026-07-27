import { servicesData } from "@/app/lib/services/data";
import { buildServiceMetadata } from "@/app/lib/services/metadata";
import ServicePage from "@/app/components/servicePage/ServicePage";

const data = servicesData["ubah-bentuk-warna"];

export const metadata = buildServiceMetadata(data);

export default function UbahBentukWarnaPage() {
  return <ServicePage data={data} />;
}
