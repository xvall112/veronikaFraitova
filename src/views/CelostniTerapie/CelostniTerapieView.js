import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Headline from '../../components/Headline';
import MainLayout from '../../layouts/Main/Main';
import Container from '../../components/Container';
import Reviews from '../../components/Reviews';
import Features from '../../components/Features';
import Price from '../../components/Price';

const CelostniTerapieView = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <Headline
            title="Celostní terapie"
            subtitle="Propojuji práci s tělem, myslí, duší i duchem."
          />
        </Container>
        <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography color="text.secondary">
            Každý z nás si v životě prochází nejrůznějšími obdobími, situacemi a
            zkušenostmi. Někdy jsou radostné, jindy bolavé. Někdy přijdou tiše,
            jindy jako vlna, která nás smete. Trauma, bolest, nejistota, strach,
            nemoc nebo ztráta směru, to všechno patří k lidskému životu.
          </Typography>

          <Typography color="text.secondary">
            V dnešní rychlé a hlučné době, plné tlaků na výkon, dokonalost a
            neustálé fungování, může být někdy opravdu těžké všechno zvládnout.
            A minimálně tehdy je naprosto v pořádku říct si o pomoc.
          </Typography>

          <Typography color="text.secondary">
            Stále více lidí si uvědomuje, že není potřeba čekat až „něco
            bouchne“. Terapie a koučink se stávají přirozenou součástí života,
            stejně jako pravidelná návštěva kadeřnictví, maséra nebo zubaře.
          </Typography>

          <Typography color="text.secondary">
            Lidé čím dál víc vnímají důležitost péče o svou mysl, emoce a
            vnitřní svět. A to je skvělé. Protože vnitřní rovnováha není luxus.
            Je to základ pro zdravý, naplněný a radostný život.
          </Typography>

          <Typography color="text.secondary">
            Jsem tady pro vás, ať už vás tíží cokoliv, nebo cítíte volání po
            hlubším poznání a růstu. V bezpečném, klidném a laskavém prostoru,
            kde se můžete zastavit, nadechnout, pustit a proměnit svá trápení,
            pocítit klid, úlevu a přijmout novou energii. Můžeme spolu jemně
            rozplétat to, co vás tíží a hledat cestu zpět k vaší síle, rovnováze
            a vnitřnímu klidu. Každá bolest v sobě nese informaci. A když jí
            porozumíme, může se proměnit v léčení, sílu a nový začátek.
          </Typography>

          <Typography color="text.secondary">
            Ve své praxi propojuji úžasné terapeutické metody a vybírám z nich
            to nejúčinnější a nejhlubší. Každá terapie, kterou nabízím, je
            jedinečná a přizpůsobená právě vám, vašim potřebám, emocím a životní
            situaci. Ať už se rozhodnete pro jakoukoli metodu, čeká vás cesta k
            hlubší rovnováze, zdraví a sebepoznání.
          </Typography>

          <Typography color="text.secondary">
            Celostní terapie mají sílu měnit nejen vás, ale i svět kolem vás.
            Když se uzdravujete vy, uzdravuje se i vaše okolí, rodina, vztahy,
            pracovní prostředí. Společně tak tvoříme harmonii, která má dosah
            daleko za hranice jednoho lidského života. Jsem tu pro vás jako
            terapeutka, průvodkyně i opora vaší proměny.
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

export default CelostniTerapieView;
