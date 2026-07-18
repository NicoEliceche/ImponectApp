import React from 'react';
import * as S from './RouteSkeletonStyled';

const skeletonCards = Array.from({ length: 6 }, (_, index) => `route-skeleton-${index}`);

export const RouteSkeleton = () => (
  <S.SkeletonShell aria-label="Cargando seccion">
    <S.SkeletonHeader>
      <S.SkeletonPill />
      <S.SkeletonTitle />
      <S.SkeletonLine $wide />
    </S.SkeletonHeader>

    <S.SkeletonGrid>
      {skeletonCards.map((card, index) => (
        <S.SkeletonCard key={card} $large={index === 0}>
          <S.SkeletonLine $wide />
          <S.SkeletonLine />
          <S.SkeletonLine $short />
        </S.SkeletonCard>
      ))}
    </S.SkeletonGrid>
  </S.SkeletonShell>
);
