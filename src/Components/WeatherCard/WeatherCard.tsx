import React from 'react';
import styled from 'styled-components';

import { Props, Weather } from './WeatherCard.types';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  position: relative;
  background: #eee;
  background: linear-gradient(240deg, rgba(150, 50, 50, 0.3) , rgba(0, 0, 200, 0) );
`;

const Card = styled.div`
  box-shadow: 9px 7px 40px -6px rgba(0,0,0,0.25);
  overflow: hidden;
  width: 300px;
  padding: 0;
  height: 400px;
  min-height: 300px;
  margin: 20px;
  border-radius: 5px;
  //border: solid 0px #fff;
  position: relative;
  background-color: #DAE3FD;
  transition: background-color $speed ease;
  
  .thunder &
  {
    background-color: #9FA4AD;
  }

  .rain &
  {
    background-color: #D8D8D8;
  }
  
  .sun &
  {
    background-color: #ccccff;
  }
  #inner
  {
    background-color: rgba(255,255,255,1);
    background: linear-gradient(to bottom, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%);
    
  }
  
  .cloud
  {
    transition: fill $speed ease;
  }
    
  #cloud1
  {
    fill: #efefef;
    
    .thunder &
    {
      fill: #9FA4AD;
    }
  }

  #cloud2
  {
    fill: #E6E6E6;
    
    .thunder &
    {
      fill: #8B8E98;
    }
  }

  #cloud3
  {
    fill: #D5D5D5;
    
    .thunder &
    {
      fill: #7B7988;
    }
  }
`;

const CardDetails = styled.div`
position: absolute;
		top: 0;
		left: 0;
		right: 0;
		padding: 16px 20px;
		color: #888;
		
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		
		transition: color $speed ease;
		
		.thunder &
		{
			color: #ddd;
		}
		
		.right
		{
			text-align: right;
		}
		
		#date
		{
			margin: 4px 0;
		}
		
		#summary
		{
			font-weight: 600;
			font-size: 22px;
		}

		.temp
		{
			font-size: 60px;
			line-height: 60px;

			span
			{
				font-size: 18px;
				line-height: 30px;
				vertical-align: top;
				margin-left: 5px;
			}
			
		}
`;

const Temprature = styled.div``;

const Date = styled.div``;
const Summary = styled.div``;

export class WeatherCard extends React.Component<{}, Props> {

  public render(): React.ReactNode {
    return (
      <Card>
        <CardDetails>
          <Temprature>20 <span>c</span></Temprature>
          <Date>Monday 22 August</Date>
          <Summary></Summary>
        </CardDetails>
      </Card>
    );
  }
}