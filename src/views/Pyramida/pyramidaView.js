import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Headline from '../../components/Headline';
import MainLayout from '../../layouts/Main/Main';
import Container from '../../components/Container';
import Reviews from '../../components/Reviews';
import Features from '../../components/Features';
import Price from '../../components/Price';

const Pyramida = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <Headline
            title="Pobyt v pyramidě"
            subtitle="Představte si místo, kde se čas zpomaluje, tělo se noří do hlubokého klidu a mysl se tiší…"
          />
        </Container>
        <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography color="text.secondary">
            Místo, kde se harmonizuje vaše energetické pole, dochází k
            regeneraci, uvolnění a probuzení vnitřních samoléčivých procesů.
            Takové místo skutečně existuje — v srdci meditační pyramidy,
            vytvořené z mědi a orgonitu.
          </Typography>

          <Typography color="text.secondary">
            Tato speciálně navržená pyramida využívá posvátnou geometrii,
            působení krystalů, mědi a orgonitového pole. Orgonit má schopnost
            pohlcovat negativní energii a přeměňovat ji na pozitivní vibrace. Ve
            spojení s přesnou pyramidální geometrií vzniká stabilní, vysoce
            vibrační energetické pole, které působí harmonizačně na tělo, mysl i
            duši.
          </Typography>
        </Container>
        <Container>
          <Features
            title="Ověřené účinky pyramidální energie"
            subtitle="Už starověcí Egypťané stavěli pyramidy s přesnými proporcemi – jejich rozměry a úhly nejsou náhodné. Například slavná Cheopsova pyramida je orientovaná dokonale ke světovým stranám a vychází z posvátné geometrie, konkrétně ze zlatého řezu (φ), který se přirozeně objevuje ve stavbě těla, květech, mušlích nebo spirálách galaxií.
Stejný typ geometrie využívá i tato meditační pyramida. Je postavena podle proporcí Cheopsovy pyramidy, tedy s poměrem zlatého řezu a přesnou orientací ke světovým stranám. Díky tomu vytváří stabilní a vysoce harmonické energetické pole, které zesiluje léčivé procesy, podporuje meditaci a vede ke klidu a harmonii těla i duše."
          />
        </Container>
        <Container>
          <Box display="flex" flexDirection="column" gap={4}>
            <Features
              title="Co vám pobyt pod pyramidou přinese?"
              features={[
                'Hlubokou relaxaci a zklidnění mysli',
                'Uvolnění stresu, úzkosti a emočních bloků',
                'Harmonizaci energetického systému a čaker',
                'Zvýšení vitality a regenerace fyzického těla',
                'Podporu při detoxikaci a očistě',
                'Lepší spánek, koncentraci a propojení se sebou',
              ]}
            />

            <Features
              title="Jak může váš pobyt v pyramidě probíhat?"
              subtitle="Každý pobyt je individuální a přizpůsobený vašim aktuálním potřebám. Vybrat si můžete z těchto forem:"
              features={[
                'Klidný pobyt a relaxace – jen spočinout, vnímat a nabíjet se',
                'Vedená meditace – připravená na míru vašemu tématu (např. propojení s vnitřním dítětem, aktivace ženské síly, otevření srdce, odpuštění…)',
                'Terapie v pyramidě – kombinace regresní, energetické nebo kvantové terapie, probíhající v bezpečném poli pyramidy',
              ]}
            />

            <Features
              title=" Délka pobytu"
              features={[
                '15 minut – jemná harmonizace, osvěžení a naladění',
                '30 až 60 minut – hlubší prožitek, meditace, terapie nebo očista',
              ]}
            />
          </Box>
        </Container>
        <Container>
          <Features
            title="Upozornění!"
            subtitle="Pobyt pod pyramidou není doporučován osobám s akutními psychickými poruchami, lidem s kardiostimulátory ani těhotným ženám. Vždy se prosím poraďte individuálně podle svého aktuálního zdravotního stavu."
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

export default Pyramida;
