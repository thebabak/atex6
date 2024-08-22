import AboutCategories from '@/components/AboutCategories/AboutCategories'
import AboutCommited from '@/components/AboutCommited/AboutCommited'
import AboutExprince from '@/components/AboutExprince/AboutExprince'
import AboutHeader from '@/components/AboutHeader/AboutHeader'
import AboutJoinUs from '@/components/AboutJoinUs/AboutJoinUs'
import React from 'react'


function index() {
  return (
    <div>
       <AboutHeader/>
   <AboutExprince/>
   <AboutCategories/>
   <AboutCommited/>
   <AboutJoinUs/>
    </div>
  )
}

export default index