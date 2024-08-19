 
import React from 'react'
import SectionBadge from './ui/section-badge'
import Container from './global/container'
import Wrapper from './global/warpper'
import Icons from './global/icons'
import { features } from '@/constants'

function Features() {
  return (
    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
    <Container>
    <div className="max-w-md mx-auto text-start md:text-center">
        <SectionBadge title="The Process " />
        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
            Three steps to build your dream website
        </h2>
        <p className="text-muted-foreground mt-6">
            Turn your vision into reality in just 3 simple steps
        </p>
    </div>
    <Container>
      <div className='flex items-center justify-center mx-auto mt-8 '>
        <Icons.feature className='w-auto h-80'/>
      </div>
    </Container>
    <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8  ">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex flex-col items-start lg:items-start px-0 md:px-0  ">
                                    <div className="flex items-center justify-center ">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {feature.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
</Container>
</Wrapper>
  )
}

export default Features