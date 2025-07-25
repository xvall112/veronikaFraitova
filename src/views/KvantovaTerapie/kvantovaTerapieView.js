import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Headline from '../../components/Headline';
import MainLayout from '../../layouts/Main/Main';
import Container from '../../components/Container';
import Reviews from '../../components/Reviews';
import Features from '../../components/Features';
import Price from '../../components/Price';

const KvantovaTerapieView = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <Headline
            title="Kvantová terapie"
            subtitle="Práce s informacemi v kvantovém (bioinformačním nebo také energetickém) poli klienta."
          />
        </Container>
        <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography color="text.secondary">
            Práce s informacemi v kvantovém (bioinformačním nebo také
            energetickém) poli klienta. Každý z nás je obklopen vlastním
            kvantovým polem. Neviditelným energetickým obalem (jemnohmotnými
            vrstvy těl), který v sobě nese otisk našich emocí, myšlenek,
            prožitků, traumat, zkušeností, minulých životů... Toto pole je
            propojeno s naším fyzickým tělem a vše, co se odehrává na úrovni
            těla, se odráží i v energetickém poli, a naopak.
          </Typography>

          <Typography color="text.secondary">
            Hlubinná kvantová terapie je fascinující a revoluční metoda.
            Propojuji při ní poznatky kvantové fyziky s energetickým léčením a
            psychologií. Tato technika se zaměřuje na harmonizaci vašeho
            kvantového pole a ovlivnění podvědomých vzorců. Aktivuje váš vlastní
            léčivý potenciál a podporuje přirozené regenerační procesy.
            Prostřednictvím jedinečných technik regulujeme vaše pole a
            odstraňujeme bloky, které mohou bránit vašemu uzdravení. Tento
            proces je nejen efektivní, ale také hluboce transformační.
          </Typography>

          <Typography color="text.secondary">
            Jedná se o jemnou a zároveň velmi účinnou metodu, která pracuje s
            informacemi uloženými hluboko v podvědomí. Pomocí přesně cílených
            otázek se dostáváme k prvotnímu momentu, kdy se ve vašem životě
            poprvé objevila určitá negativní emoce, program nebo přesvědčení. V
            tomto bezpečném prostoru pak pracuji ve vašem kvantovém poli, kde
            uvolňuji a odstraňuji neprospěšné informace, vzorce, myšlenky,
            emoce, přesvědčení... Tím dochází k neutralizaci vzpomínky a
            hluboké, trvalé změně na podvědomé úrovni.
          </Typography>

          <Typography color="text.secondary">
            Klienti často pociťují okamžitou proměnu už během terapie. Jakmile
            začnu pracovat v jejich kvantovém poli, ihned se uvolňuje energie,
            emoce, myšlenky i stará traumatická zátěž. Tato proměna probíhá bez
            jakékoli prodlevy, a klienti tak téměř okamžitě pocítí úlevu, klid a
            zlepšení svého stavu.
          </Typography>

          <Typography color="text.secondary">
            Mnozí zažívají nárůst vitality, lepší psychické zdraví a celkovou
            pohodu. Cítí se osvobozeni od starých vzorců chování a negativních
            přesvědčení, což jim umožňuje žít plnohodnotnější a šťastnější
            život. Tajemství kvantové terapie spočívá v jejím holistickém
            přístupu. Tento přístup umožňuje proniknout k základním příčinám
            vašich problémů a přinášet trvalé změny. S každou jednotlivou seancí
            se otevíráte novým možnostem, které přispívají k vaší vnitřní
            harmonii.
          </Typography>

          <Typography color="text.secondary">
            Díky hlubinné kvantové terapii se můžete osvobodit od bolestivých
            emocí, omezujících přesvědčení, fyzických i psychických potíží a
            otevřít si cestu ke zdraví, rovnováze a vnitřní svobodě. Touto
            metodou lze řešit opravdu všechno. Je velmi rychlá a efektivní.
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

export default KvantovaTerapieView;
