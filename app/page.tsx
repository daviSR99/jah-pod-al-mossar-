
import Intro from '@/components/jpa';
import SectionDivider from '@/components/section-divider';
import Oracao from '@/components/oracao';
import Almosso from '@/components/posso-almossar';
import Stack from '@/components/stack';


export default function Home() {
  return (
    <main  className="flex flex-col items-center px-4 ">
      <Intro />
      <SectionDivider />
      <Oracao />
      <Almosso/>
      <Stack/>
    </main>
  )
}
