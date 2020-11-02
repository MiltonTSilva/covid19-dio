import React, { memo } from 'react'
import { Grid, Skeleton } from 'components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
        <p />
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
      </Grid>

      <Grid item xs={12} md={6}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#000" />
        <p />
        <Card value={getValue(deaths)} label="Mortos" color="#E95078" />
      </Grid>

      <Grid item xs={12} md={12}>
        <Card value={getValue(recovered)} label="Recuperados" color="#67C887" />
      </Grid>
    </Grid>
    
  )
}

export default memo(Board)