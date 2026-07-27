import { servicesData } from "@/app/lib/services/data";
import { buildServiceMetadata } from "@/app/lib/services/metadata";
import ServicePage from "@/app/components/servicePage/ServicePage";

const data = servicesData["balik-nama-kendaraan"];

export const metadata = buildServiceMetadata(data);

export default function BalikNamaKendaraanPage() {
  return <ServicePage data={data} />;
}
