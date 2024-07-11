import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

import React from 'react'
import VideoCarousel from './VideoSlider'
const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        //markers: true,
        trigger: '#title',
        start: 'top 80%', // Adjust these values as needed
        end: 'top 30%',
        toggleActions: 'play none none reset', // Play on enter, reset on leave
      },
    })

    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
      scrollTrigger: {
        //markers: true,
        trigger: '.link',
        start: 'top 80%', // Adjust these values as needed
        end: 'top 30%',
        toggleActions: 'play none none reset', // Play on enter, reset on leave
      },
    })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full lg:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights
