import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { useRouter } from "next/navigation";
import Card from './components/card'
import {NewsSchema} from '../utils/fetch'
import articles_data from '../utils/fetch';
import CardMain from './components/card_main';
import CardData from './components/carddata';

export default async function Home() {
  return (
    <main className='' >
      <CardMain>
        <CardData></CardData>
      </CardMain>
    </main>
  )
}
