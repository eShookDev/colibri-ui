"use client"

import { Swipable, Section, Card, Typography, Button } from "@repo/ui";
import { Parallax } from "@repo/animation";

import { Layout } from '@/components'

import { data } from "@/data";
import { Sevillana } from "next/font/google";

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
              Hello, We Are <br />Colibri UI
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
              <p className='text-2xl border-b border-[var(--border-color)] pb-6 mb-6 mt-40'>We're a creative agency wich in art we trust</p>
              <p className='text-base font-thin w-11/12'>Founded in 2024, the founder Marius Danyel Buzatu he start to trust in art of web design </p>
              <p className='text-base font-thin w-11/12 mt-6'>The term web design is normally used to describe the design process relating to the front-end (client side) design of a website including writing mark up. Web design partially overlaps web engineering.</p>
              <p className='text-base font-bold w-11/12 mt-6'>- Michael Smith</p>
            </Card.Content>
          </Card>
          <Card className="mt-14 ml-4 p-0" variant="outline">
            <Parallax
              src={require("../../public/images/content_hero.jpg")}
              alt=""
            />
            <Card className="absolute left-0 bottom-0 ml-12 mb-12" variant="outline">
              <div className="flex flex-col">
                <span className="text-8xl uppercase font-bold">5</span>
                <span className="text-base uppercase">Years of experience</span>
              </div>
            </Card>
          </Card>
        </Section.Content>
      </Section>
      <Section>
        <Section.Header>
          <p className='text-base border-b border-[#405E61]'>Our Services</p>
          <p className='text-5xl max-w-2xl'>We are delivering beautiful digital products for you.</p>
        </Section.Header>
        <Section.Content>
          <div className='grid grid-cols-3 gap-6'>
            <Card>
              <Card.Header>
                <p className='text-wl font-bold tracking-wide'>Idea</p>
                <p className='text-base font-thin'>Web design encompasses many different skills and disciplines in the production and maintenance of websites</p>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <p className='text-wl font-bold tracking-wide'>Minds</p>
                <p className='text-base font-thin'>Mind design encompasses many different skills and disciplines in the production and maintenance of website</p>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <p className='text-wl font-bold tracking-wide'>Planning</p>
                <p className='text-base font-thin'>Planning design encompasses many different skills and disciplines in the production and maintenance of website</p>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <p className='text-wl font-bold tracking-wide'>Web Design</p>
                <p className='text-base font-thin'>Web design encompasses many different skills and disciplines in the production and maintenance of website</p>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <p className='text-wl font-bold tracking-wide'>Mobile Design</p>
                <p className='text-base font-thin'>Mobile design encompasses many different skills and disciplines in the production and maintenance of application</p>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <p className='text-wl font-bold tracking-wide'>Software Design</p>
                <p className='text-base font-thin'>Software design encompasses many different skills and disciplines in the production and maintenance of application</p>
              </Card.Header>
            </Card>
          </div>
        </Section.Content>
      </Section>
      <Section className="h-screen relative">
        <Parallax src={require("../../public/images/parallax_1.jpg")} alt="" />
        <Card
          withAnimation={{
            animation: "Move",
            config: {
              fromVars: { y: 100 },
              toVars: { y: -100 }
            }
          }}
          variant="outline"
          className="absolute right-24  bg-black w-auto max-w-prose">
          <Card.Header asHeading>__Unlimited Power</Card.Header>
          <Card.Content>
            <p className="text-base font-thin">Action is what unites every great success. Action is what produces results. Knowledge is only potential power until it comes into the hands of someone who knows how to get himself to take effective action. In fact, the literal definition of the word “power” is “the ability to act.”</p>
          </Card.Content>
        </Card>
      </Section>
      <Section>
        <Section.Header>
          <p className="text-base border-b border-[#405E61]">Our Works</p>
          <p className='text-5xl max-w-2xl'>Creative desisgns portfolio</p>
        </Section.Header>
        <Section.Content>

        </Section.Content>
      </Section>
      <Section>
        <Section.Header>
          <p className="text-base border-b border-[#405E61]">From Blog</p>
          <p className='text-5xl max-w-2xl'>Latest and greatest post</p>
        </Section.Header>
      </Section>
      <Section>
        <Section.Header>
          <p className='text-base border-b border-[#405E61]'>Our Collaboration</p>
          <p className='text-5xl max-w-2xl'>Your success, our reputation.</p>
        </Section.Header>
        <Section.Content asGrid templateColumns={3} templateGap={{ Column: 8, Row: 8 }}>
          <Card>
            <Card.Header asHeading className="text-center">NextJS</Card.Header>
          </Card>
          <Card>
            <Card.Header asHeading className="text-center">Expo</Card.Header>
          </Card>
          <Card>
            <Card.Header asHeading className="text-center">NodeJS</Card.Header>
          </Card>
          <Card>
            <Card.Header asHeading className="text-center">Typescript</Card.Header>
          </Card>
          <Card>
            <Card.Header asHeading className="text-center">TailwindCSS</Card.Header>
          </Card>
          <Card>
            <Card.Header asHeading className="text-center">ColibriUI</Card.Header>
          </Card>
        </Section.Content>
      </Section>
      <Section className='py-12 my-0 border-t border-[var(--border-color)]'>
        <Section.Content>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <p className='text-base font-thin'>Don&apos;t be weired</p>
              <p className='text-5xl max-w-2xl tracking-wide'>Would you like more information or do you have a question?</p>
            </div>
            <div className='flex items-center'>
              <Button variant="outline" size="lg">Button</Button>
            </div>
          </div>
        </Section.Content>
      </Section>
      <footer className='flex justify-center py-10 border-t border-[var(--border-color)]'>
        <div className='container px-12'>
          <div className='grid grid-cols-2'>
            <div className='relative'>
              <ul>
                <li className='inline-block hover:text-[#405E61]'>Instagram.</li>
                <li className='inline-block hover:text-[#405E61] ml-4'>Twitter.</li>
                <li className='inline-block hover:text-[#405E61] ml-4'>Youtube.</li>
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