"use client"

import { Swipable, Section, Card } from "@repo/ui";
import { Parallax } from "@repo/animation";

import { Layout } from '@/components'

import { data } from "@/data";

export default function Home() {

  return (
    <Layout>
      <Swipable
        data={data}
        fullWidth
        contentFit='center'
        withImage
      />
      <Section>
        <Section.Content asGrid templateColumns={2}>
          <Card variant="ghost">
            <Card.Header
              withAnimation={{
                animation: "Move",
                config: {
                  fromVars: { y: 0 },
                  toVars: { y: -70 }
                }
              }}
              asHeading
              className="uppercase absolute top-0 -right-20 z-10 leading-relaxed tracking-wider font-black">
              Hello, We Are <br />Rosa Pepe
            </Card.Header>
            <Card.Content
              withAnimation={{
                animation: "fadeIn",
                config: {
                  fromVars: { y: 0 },
                  toVars: { y: -50 },
                }
              }}
            >
              <p className='text-2xl border-b border-[var(--border-color)] pb-6 mb-6 mt-40'>L&apos;amore per il gioiello nel cuore della Toscana</p>
              <p className='text-base font-thin w-11/12'>Rosapepe nasce venticinque anni fa nel cuore della Toscana, tra Arezzo e Firenze, nell’incrocio delle strade della moda e della cultura. <br />La cura artigiana e l’attenzione per la bellezza si declinano attraverso l’esperienza della produzione orafa, unendo creatività e manodopera sottile.<br /> È l’amore per il gioiello, l’eleganza e la raffinatezza a spingerci a fare sempre di più e ad affermarci nel panorama dello stile italiano, creando collezioni di lusso accessibile.</p>
            </Card.Content>
          </Card>
          <Card className="mt-14 ml-4 p-0" variant="outline">
            <Parallax
              src={require("../../public/images/content_hero.jpg")}
              alt=""
            />
            <Card className="absolute left-0 bottom-0 ml-12 mb-12" variant="outline">
              <div className="flex flex-col">
                <span className="text-8xl uppercase font-bold">25</span>
                <span className="text-base uppercase">anni di esperienza</span>
              </div>
            </Card>
          </Card>
        </Section.Content>
      </Section>
      <Section>
        <Section.Header>
          <p className='text-base border-b border-pink-600'>Our Services</p>
          <p className='text-5xl max-w-2xl'>We are delivering beautiful digital products for you.</p>
        </Section.Header>
        <Section.Content>
          <div className='grid grid-cols-3 gap-6'>
            <Card>
              <Card.Header>
                <p className='text-wl font-bold tracking-wide'>Prototipazione</p>
                <p className='text-base font-thin'>Diamo forma alle ispirazione dei nostri clienti con risultati estetici di livello, con tecniche sia artigianali che innovative di design e modellistica.</p>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <p className='text-wl font-bold tracking-wide'>Consulenza</p>
                <p className='text-base font-thin'>Ascoltiamo ogni necessità delle nostre aziende clienti e, interpretando le nuove tendenze in atto, offriamo un servizio di customer care ottimale durante ogni fase del rapporto.</p>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <p className='text-wl font-bold tracking-wide'>Distribuzione</p>
                <p className='text-base font-thin'>Distribuiamo i nostri prodotti di gioielleria e accessori fashion in modo rapido, efficace e capillare in tutto il territorio nazionale e europeo.</p>
              </Card.Header>
            </Card>
          </div>
        </Section.Content>
      </Section>
      <Section className="h-screen relative">
        <Parallax src={require("../../public/images/x_2.jpg")} alt="" />
        <Card
          withAnimation={{
            animation: "Move",
            config: {
              fromVars: { y: 100 },
              toVars: { y: -100 }
            }
          }}
          variant="outline"
          className="absolute right-1/4 bg-black">
          <Card.Header asHeading>Unlimited Power</Card.Header>
          <Card.Content>
            <p>Most of our writings have centered on implementing strategies for business units, with their unique</p>
            <p>geeza arse it’s your round grub sloshed burke, my good sir chancer he legged it he lost his bottle pear shaped bugger all mate</p>
          </Card.Content>
        </Card>
      </Section>
      <Section>
        <Section.Header>
          <p className='text-base border-b border-pink-600'>Our Collaboration</p>
          <p className='text-5xl max-w-2xl'>Your success, our reputation.</p>
        </Section.Header>
        <Section.Content asGrid templateColumns={3} templateGap={{ Column: 8, Row: 8 }}>
          <Card>
            <Card.Header asHeading className="text-center">Venchi Cioccolato</Card.Header>
          </Card>
          <Card>
            <Card.Header asHeading className="text-center">Furla</Card.Header>
          </Card>
          <Card>
            <Card.Header asHeading className="text-center">Yves Rocher Italia</Card.Header>
          </Card>
          <Card>
            <Card.Header asHeading className="text-center">Stanhome</Card.Header>
          </Card>
          <Card>
            <Card.Header asHeading className="text-center">Dolciaria Alessandria</Card.Header>
          </Card>
          <Card>
            <Card.Header asHeading className="text-center">Bottega Verde</Card.Header>
          </Card>
        </Section.Content>
      </Section>
      <Section className='py-12 my-0 border-t border-[var(--border-color)]'>
        <Section.Content>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <p className='text-base text-pink-600'>Don&apos;t be weired</p>
              <p className='text-5xl max-w-2xl tracking-wide'>Hai bisogno di ulteriori informazioni sui prodotti disponibili o vuoi saperne di più sui nostri gioielli?</p>
            </div>
            <div className='flex items-center'>
              <a className=''>Loool</a>
            </div>
          </div>
        </Section.Content>
      </Section>
      <footer className='flex justify-center py-10 border-t border-[var(--border-color)]'>
        <div className='container px-12'>
          <div className='grid grid-cols-2'>
            <div className='relative'>
              <ul>
                <li className='inline-block hover:text-pink-600'>Instagram.</li>
                <li className='inline-block hover:text-pink-600 ml-4'>Twitter.</li>
                <li className='inline-block hover:text-pink-600 ml-4'>Youtube.</li>
              </ul>
            </div>
            <div className='relative text-right'>
              2023 Made with Love
            </div>
          </div>
        </div>
      </footer>
    </Layout >
  )
}