import { servicesData } from "@/app/lib/services/data";
import { buildServiceMetadata } from "@/app/lib/services/metadata";
import ServicePage from "@/app/components/servicePage/ServicePage";

const data = servicesData["mutasi-masuk-kendaraan"];

export const metadata = buildServiceMetadata(data);

export default function MutasiMasukKendaraanPage() {
  return <ServicePage data={data} />;
}
