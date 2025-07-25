import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Headline from '../../components/Headline';
import MainLayout from '../../layouts/Main/Main';
import Container from '../../components/Container';
import Reviews from '../../components/Reviews';
import Features from '../../components/Features';
import Price from '../../components/Price';

const RegresniTerapieView = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <Headline
            title="Regresní terapie "
            subtitle="Hlubinná regresní terapie otevírá cestu k hlubokému sebepoznání a vnitřnímu osvobození."
          />
        </Container>
        <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography color="text.secondary">
            Je to jemná, přitom velmi účinná metoda práce s podvědomím, která
            vás provází zkoumáním dětských vzpomínek, prenatálního období nebo
            minulých životů. Prozkoumání naší minulosti nás vede k uzdravení
            starých traumat, strachů, úzkostí, psychosomatických potíží,
            energetických bloků i vzorců chování, které nás omezují. Pomáhá
            odhalit a uvolnit skryté příčiny problémů, které nám brání žít život
            naplno.
          </Typography>

          <Typography color="text.secondary">
            Při terapii se společně vydáváme k původním příčinám vašich potíží.
            Někdy sahají do dětství či dospívání, jindy zas do hlubších rovin
            naší existence, které si běžně ani neuvědomujeme. Právě tam často
            leží klíč k pochopení i uzdravení. Název hlubinná není náhodný,
            jdeme skutečně do hloubky. Za slova, za emoce, za povrch problému.
            Naše vnitřní zranění jsou často ukryta hluboko v podvědomí a
            ovlivňují náš současný život, to jak se cítíme i reagujeme.
          </Typography>

          <Typography color="text.secondary">
            Tato metoda je o vědomém, hlubokém ponoření do našeho vnitřního
            světa. Je mocným nástrojem, který nám umožňuje nahlédnout do vrstev
            podvědomí a odhalit skutečné příčiny různých obtíží, které nás
            omezují. Díky regresní terapii můžeme objevit zdroje závislostí,
            neopodstatněných strachů, nočních děsů, fobií a dalších bloků, často
            pramenících z minulých zkušeností nebo i minulých životů.
          </Typography>

          <Typography color="text.secondary">
            Když se bezpečně vracíme k těmto dávným událostem, máme možnost je
            zpracovat, pochopit a uvolnit emoční zátěž, která nás drží v pasti
            negativních vzorců. Toto uvolnění vede k hluboké proměně, osvobození
            od strachů a závislostí a k obnovení vnitřní rovnováhy a klidu.
          </Typography>

          <Typography color="text.secondary">
            Regresní terapie tedy není jen o prohlížení minulosti, ale především
            o osvobození a uzdravení. Pomáhá nám žít plnohodnotný život bez
            zbytečných omezení, nacházet v sobě sílu překonat překážky a
            vykročit vstříc svobodě, radosti a vnitřní harmonii.
          </Typography>

          <Typography color="text.secondary">
            Pokud vás toto volá a cítíte, že je čas nahlédnout do tajemství,
            která v sobě nosíte, může být hlubinná regresní terapie právě tou
            cestou pro vás. Patří mezi nejúčinnější alternativní způsoby, jak se
            uzdravit a vrátit zpět k vlastní síle, rovnováze a klidu.
          </Typography>
        </Container>
        <Container>
          <Features
            title="Co můžeme společně řešit?"
            subtitle="Cokoli vás trápí, volá po změně nebo si žádá hlubší pochopení."
          />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Features
                title="Osobní témata"
                features={[
                  'Vztahy – partnerské, rodinné i pracovní',
                  'Zdraví – fyzické i psychické obtíže, psychosomatika',
                  'Strachy, úzkosti, deprese, panické ataky, vyhoření',
                  'Traumata a traumatické události',
                  'Práce, poslání, smysl života, osobní rozvoj',
                  'Finance a vztah k hojnosti',
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Features
                title="Děti a rodičovství"
                features={[
                  'Nemoci dětí, jejich příčiny a souvislosti',
                  'Vědomé rodičovství, vztah s dítětem, vnitřní dítě',
                  'Děti jako naši učitelé',
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Features
                title="Ženská a mužská témata"
                features={[
                  'Probuzení ženství/mužství, sebeláska, sebehodnota',
                  'Cykličnost, menstruační problémy, neplodnost, potraty',
                  'Vnitřní síla a životní energie',
                  'Léčení rodových linií, rodové zátěže',
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Features
                title="Energie a duchovní růst"
                features={[
                  'Životní energie a její aktivace',
                  'Práce s energií, čištění, entity',
                  'Přechodové fáze života a hluboké změny',
                  'Napojení na sebe, duši, intuici',
                ]}
              />
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Features
            title="Jak probíhá terapie?"
            subtitle="V příjemném a bezpečném prostředí se společně zaměříme na Vaše aktuální témata, která jsou pro Vás v tuto chvíli nejdůležitější. Pohodlně se usadíte do relaxačního křesla a v jemném, citlivém propojení se podíváme na příčiny Vašeho trápení. Pomocí jednoduchých, ale velmi účinných technik pomůžeme uvolnit a odstranit bolesti, které Vás tíží, jednou provždy z Vašeho života.
Společně pronikneme hlouběji do situace, abyste lépe porozuměli, proč se určitá témata opakují, co Vám chtějí říct a jaký je jejich smysl. Najdeme řešení a cesty, které Vám umožní žít spokojený, naplněný život plný lásky, radosti a zdraví."
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

export default RegresniTerapieView;
