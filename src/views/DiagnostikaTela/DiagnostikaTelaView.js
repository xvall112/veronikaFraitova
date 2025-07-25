import React from 'react';
import Box from '@mui/material/Box';
import Headline from '../../components/Headline';
import MainLayout from '../../layouts/Main/Main';
import Container from '../../components/Container';
import Price from './components/Price';
import Reviews from '../../components/Reviews';

import Features from './components/Features';

const DiagnostikaTelaView = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <Headline
            title="Diagnostika a terapeutická práce s přístrojem OBERON"
            subtitle="Tělo s námi neustále komunikuje. Jen mu někdy nerozumíme.Přístroj OBERON je jemná, ale velmi přesná metoda, jak se na organismus podívat jiným způsobem. Na úrovni informací, frekvencí a energetických polí. Umožňuje nahlédnout pod povrch toho, co se v těle odehrává, často ještě dříve, než se objeví fyzické projevy nebo nemoc."
          />
        </Container>
        <Container>
          <Features
            title="Co je přístroj OBERON?"
            subtitle="Oberon je diagnosticko-terapeutický přístroj nové generace, který analyzuje bioinformační pole těla.Pomocí jemných frekvencí. Dokáže:"
            features={[
              'Vyhodnotit energetickou rovnováhu orgánů, systémů i buněk',
              'Upozornit na zánětlivá ložiska, oslabení, přetížení nebo bloky',
              'Odhalit psychosomatické souvislosti nemocí',
              'Navrhnout harmonizační frekvence a bio-rezonanční terapii',
            ]}
          />
        </Container>
        <Container>
          <Features
            title="Jak probíhá terapie Oberon a co se v těle děje?"
            subtitle="Přístroj Oberon využívá nelineární analýzu (NLS) k detailnímu snímání a hodnocení frekvenčních vzorců v těle. 
Zadáme potřebné údaje a přístroj začne měřit. 
Během několika minut se provede komplexní frekvenční sken těla – od orgánů a tkání až po buňky a jejich jádra."
            features={[
              'Analyzuje funkční stav orgánů, meridiánů i energetického pole (aury)',
              'Identifikuje přítomnost virů, bakterií, parazitů, plísní a toxinů',
              'Rozpozná psychosomatické zátěže, stresové faktory a energetické bloky',
              'Na základě odchylek od optimálních frekvencí dokáže odhalit disharmonie ještě před tím, než se projeví na fyzické úrovni jako nemoc',
            ]}
          />
        </Container>
        <Container>
          <Features
            title="Poté je možné spustit tzv. frekvenční harmonizaci (metaterapii), která cíleně podporuje"
            features={[
              'Obnovení buněčné komunikace a vitality',
              'Harmonizaci imunitního systému',
              'Rozpuštění blokád a zátěží',
              'Aktivaci samoléčebných a regeneračních procesů',
            ]}
          />
        </Container>
        <Container>
          <Features
            title="Proč právě OBERON?"
            subtitle="Celý proces je neinvazivní, bezbolestný a bezpečný, vhodný i jako prevence nebo doplněk k jiným terapeutickým metodám."
            features={[
              'Jemný a neinvazivní způsob zjištění, co se skutečně děje v těle. Oberon pracuje s biofrekvenční analýzou, díky které dokáže detailně zmapovat stav vašich orgánů, buněk i energetických polí – bez bolesti, vpichů nebo jiných zásahů.',
              'Vhodný i pro děti, seniory a citlivé klienty. Díky své šetrnosti je ideální pro všechny věkové skupiny – včetně těch, kteří obtížně snášejí jiné formy vyšetření nebo terapeutických metod.',
              'Odhaluje skutečné příčiny potíží, nejen jejich projevyOberon jde do hloubky. Pomáhá identifikovat skryté zátěže jako viry, bakterie, parazity, toxiny, emoční bloky nebo disharmonii v energetickém systému, které mohou být skutečnou příčinou opakovaných potíží nebo chronických stavů.',
              'Podporuje samoléčebné procesy a harmonizaci těla. Díky metaterapii lze aktivně ovlivnit frekvenční rovnováhu v těle a nastartovat proces regenerace, detoxikace a celkové vitality.',
            ]}
          />
        </Container>
        <Box bgcolor={'alternate.main'}>
          <Container>
            <Price />
          </Container>
        </Box>
        <Container>
          <Reviews />
        </Container>
      </MainLayout>
    </div>
  );
};

export default DiagnostikaTelaView;
