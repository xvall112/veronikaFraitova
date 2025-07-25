import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Headline from '../../components/Headline';
import MainLayout from '../../layouts/Main/Main';
import Container from '../../components/Container';
import Reviews from '../../components/Reviews';
import Features from '../../components/Features';
import Price from '../../components/Price';

const EnergetickaTerapieView = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <Headline
            title="Energetická terapie"
            subtitle="Naše tělo není jen to, co vidíme. To je jen viditelná špička ledovce. Uvnitř nás existuje rozsáhlý energetický systém, skrze který proudí životní energie."
          />
        </Container>
        <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography color="text.secondary">
            Naše tělo není jen to, co vidíme. To je jen viditelná špička
            ledovce. Uvnitř nás existuje rozsáhlý energetický systém, skrze
            který proudí životní energie. Tato energie prochází energetickými
            dráhami a centry zvanými čakry a vyživuje všechny buňky, orgány i
            systémy v těle. Když je proud energie silný a volný, cítíme se
            nabití, tvořiví, zdraví a v rovnováze. Pokud se však energie vlivem
            stresu, nezpracovaných emocí, negativních myšlenek, traumat… někde
            zablokuje, začne se to postupně projevovat únavou, vnitřní tíhou,
            zaseknutím, psychickými a fyzickými potížemi i nemocí.
          </Typography>

          <Typography color="text.secondary">
            Čakry, které energii v těle rozvádějí, mohou být oslabené nebo
            neprůchodné, což vede k tomu, že se necítíme ve své síle.
          </Typography>

          <Typography color="text.secondary">
            Stejně jako si pravidelně myjeme tělo, potřebuje očistu i naše
            energetické pole. Od emočních nánosů, negativních myšlenek, stresu,
            vnitřních konfliktů i cizích energií, které na sebe během dne
            nabíráme. Čisté energetické tělo je základem zdravého, radostného a
            naplněného života. Když pečujeme o svou energii, emoce i mysl,
            zvládáme životní výzvy s větší lehkostí a dokážeme žít svůj skutečný
            potenciál.
          </Typography>

          <Typography color="text.secondary">
            Pokud cítíte, že vaše energie stagnuje, zvu vás na individuální
            energetickou terapii, během které čistím a harmonizuji vaše čakry,
            uvolňuji zablokovanou energii. Tělu se navrací přirozený tok životní
            síly a navrací se váš vnitřní klid. Pracuji s energetickým polem
            těla tak, aby se obnovil přirozený proud energie, uvolnilo napětí a
            podpořilo fyzické, psychické i celkové zdraví.
          </Typography>

          <Typography color="text.secondary">
            Pokud jsou čakry zablokované nebo oslabené, můžete pociťovat
            nedostatek energie, únavu, vyčerpání, nechuť, pocity těžkosti,
            „zaseknutí“ psychické problémy, bolesti, oslabení imunitního
            systému, nemoci atd. Stejně jako myjeme své fyzické tělo, je
            důležité, „mýt“, tedy čistit a harmonizovat i své energetické tělo.
            Nezpracované emoce, negativní myšlenky, konflikty, energetická
            propojení, stres… v našem energetickém systému. Protože čisté
            energetické tělo je základ zdravého, radostného a naplněného života.
            Pravidelná péče o svou energii, emoční tělo i mysl nám umožňuje lépe
            zvládat výzvy, být v souladu sami se sebou a žít Tělo se uzdravuje
            skrze energii.
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

export default EnergetickaTerapieView;
