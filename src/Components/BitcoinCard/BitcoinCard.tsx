import React from "react";
import axios from "axios"; 
import styled from "styled-components";
import BTCLogo from "../../Assets/BTCLogo.png";
import Countup from "react-countup"
import { Props, State } from "./BitcoinCard.types";

const Card = styled.div`
  box-shadow: 9px 7px 40px -6px rgba(0, 0, 0, 0.25);
  width: 20%;
  height: 8rem;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: black;
  background: linear-gradient(to top, black 0%, black 14%);
`;

const Logo = styled.img`
  height: 25px;
  margin-top: 15px;
  margin-left: 15px;
`;

const Currency = styled.div`
  color: white;
  font-size: 600;
  font-size: 22px;
`;

const Value = styled(Countup)`
  bottom: 0;
  font-size: 28px;
  font-weight: 700;
  color: white;
`;

const ContentContainer = styled.div`
  padding: 15px;
`;

export class BitcoinCard extends React.Component<Props, State> {
  public interval: number = 0;

  constructor(props: Props) {
    super(props);

    this.state = {
      startPrice: 0,
      endPrice: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(async () => {
      const response: any = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");

      this.setState({ endPrice: response.data.bpi.USD.rate_float, startPrice: this.state.endPrice })
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  public render(): React.ReactNode {
    return (
      <Card>
        <div>
          <Logo src={BTCLogo} />
        </div>
        <ContentContainer>
          <Currency>USD</Currency>
          <Value start={this.state.startPrice} end={this.state.endPrice} decimals={2} prefix={"$"} />
        </ContentContainer>
      </Card>
    );
  }
}