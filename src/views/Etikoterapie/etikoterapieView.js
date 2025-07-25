import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Headline from '../../components/Headline';
import MainLayout from '../../layouts/Main/Main';
import Container from '../../components/Container';
import Reviews from '../../components/Reviews';
import Features from '../../components/Features';
import Price from '../../components/Price';
const EtikoterapieView = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <Headline
            title="Etikoterapie"
            subtitle="Naše tělo není jen to, co vidíme. To je jen viditelná špička ledovce. Uvnitř nás existuje rozsáhlý energetický systém, skrze který proudí životní energie."
          />
        </Container>
        <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography color="text.secondary">
            Etikoterapie je jemná, ale hluboká cesta k uzdravení, která pracuje
            s vnitřními příčinami našich nemocí, potíží i narušených vztahů.
            Naše duše promlouvá skrze naše tělo. Pomáhá odhalit, kde jsme se
            odklonili od vlastního středu, od pravdy, lásky a úcty k sobě i
            druhým.
          </Typography>

          <Typography color="text.secondary">
            Při této terapii vycházíme z porozumění, že tělo jen zrcadlí to, co
            duše dlouho volá a mysl potlačuje. Nemoc není nepřítel, ale posel.
            Ukazuje na nesoulad v našem životě ať už ve vztazích, myšlení,
            emocích či jednání. Etikoterapie nás vede k tomu, abychom si
            uvědomili, kde vznikl vnitřní konflikt, co nás v životě vzdaluje od
            přirozenosti a co je potřeba proměnit. Není to klasická léčba, ale
            vědomá práce na sobě, která otevírá prostor pro skutečné uzdravení
            nejen těla, ale především duše.
          </Typography>

          <Typography color="text.secondary">
            Při tomto procesu jsem vaším průvodcem. Vedu vás zrcadlem vašeho
            života, ukazuji spojitosti a hloubku všeho, co se vám děje. Nechávám
            vám plnou svobodu, rozhodnutí i cesty.
          </Typography>

          <Typography color="text.secondary">
            Volá vás porozumět hlubším souvislostem svých nemocí, vztahových
            potíží a opakujících se situací, které už dál nechcete prožívat?
            Cítíte, že za každou bolestí je volání po změně? Toužíte pochopit a
            převzít odpovědnost za svůj život? Hledáte cestu vnitřního klidu,
            laskavosti, lásce a soucitu? Pak je etikoterapie právě pro vás.
          </Typography>

          <Typography color="text.secondary">
            Etikoterapie je návratem k vaší podstatě v souladu s vaší duší,
            srdcem i životní cestou.
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

export default EtikoterapieView;
