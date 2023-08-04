import React from "react";
import {
  Progress,
  Box,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  OrderedList,
  ButtonGroup,
  Button as ChakraButton,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input as ChakraInput,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Center,
} from "@chakra-ui/react";
import {
  Navbar,
  Button,
  Spacer,
  Card,
  Text,
  Pagination,
  Row,
  Image,
  Container,
  Progress as NextUIProgress,
  Grid,
} from "@nextui-org/react";
import "./ModulesInvesting.css";
import { Link } from "react-router-dom";

const ModulesInvesting = () => {
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        backgroundColor="white"
        maxWidth={2000}
        p={8}
        m="10px auto"
        position="relative"
        className="text"
      >
        <Container gap={2} responsive justify="space-around">
          <Text size={36} fontWeight={"normal"} h2>Lesson 5: From Pennies to Prosperity</Text>
          <Card>
            <Card.Body>
              <Text size={30} h2>
                Overview:
              </Text>
              <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                In this comprehensive lesson on investing, we will delve into
                the concept of investing and its crucial role in building wealth
                and achieving financial goals. You will learn about various
                investment options, risk and return considerations, and the
                significant impact of starting early on your investment journey.
              </Text>
            </Card.Body>
          </Card>

          <Spacer y={2} />

          <Container>
            <Row>
              <Container>
                <Text size={30} h2>
                  Learning Goals:
                </Text>
                <Text h2 css={{ fontWeight: "$normal" }} size={30}>
                  By the end of this lesson, you will have a
                  comprehensive understanding of different types of investments,
                  the relationship between risks and returns, and various
                  investing strategies. You will also grasp the importance of
                  starting early and how compounding can significantly boost
                  your investment returns over time.
                </Text>
              </Container>
                <Image
                  className="stocks"
                  src="https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?w=2000&t=st=1691175000~exp=1691175600~hmac=aabdc0f54daf128d9c3f48680858ba111b7170cc23b7b3422c76d953a20fbeb0"
                />
            </Row>
          </Container>
        </Container>

        <Container>
          <Container>
            <Card>
              <Card.Body>
                <Text h2 css={{ fontWeight: "$normal" }} size={30}>
                  Investing and its significance: Investing involves deploying
                  your money into assets or financial instruments with the
                  expectation of generating a profit or a positive return over
                  time. It is a fundamental element of building wealth and
                  achieving financial independence. By investing wisely, you can
                  make your money work for you, creating opportunities for
                  growth and financial security.
                </Text>
                <Text h2 css={{ fontWeight: "$normal" }} size={30}>
                  There are numerous investment options available, each with its
                  own risk and return profile. Some common investment choices
                  include:
                </Text>
              </Card.Body>
            </Card>
            <Spacer y={1} />
            <Grid.Container gap={3} justify="center">
              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Stocks:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={25}>
                      Investing in shares of publicly traded companies. Stocks
                      can offer significant potential for long-term growth but
                      also come with higher volatility and risk.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>

              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Bonds:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={25}>
                      Lending money to governments or corporations in exchange
                      for periodic interest payments and the return of the
                      principal amount. Bonds are generally considered safer
                      than stocks but may have lower potential for growth.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>

              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Mutual Funds:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={25}>
                      Pooling money from multiple investors to invest in a
                      diversified portfolio of stocks, bonds, or other assets.
                      Mutual funds offer diversification and professional
                      management.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>

              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Real Estate:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={25}>
                      Investing in properties for rental income or capital
                      appreciation. Real estate can provide a tangible asset
                      with the potential for passive income and value
                      appreciation.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>

              <Grid xs={6}>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Retirement Accounts:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={25}>
                      Tax-advantaged accounts such as 401(k)s or IRAs designed
                      to help individuals save for retirement.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>
            </Grid.Container>

            <Image
              className="coin"
              src="https://img.freepik.com/free-vector/woman-investing-getting-profit_74855-11229.jpg?w=2000&t=st=1691175056~exp=1691175656~hmac=f72060c7eef596780e72ae21b96d184e9ea19a185eb5fe662607e3b12999e288"
            />

            <Grid.Container gap={3} justify="center">
              <Grid>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Understanding risk and return:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Investing involves taking risks with the expectation of
                      receiving higher returns. Different types of investments
                      carry varying levels of risk, and it's essential to
                      understand the risk-return trade-off. Generally,
                      investments with higher potential returns also have higher
                      associated risks. It's crucial to align your investment
                      choices with your risk tolerance and financial goals.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>

              <Grid>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Conducting research before investing:{" "}
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Investing wisely requires conducting thorough research on
                      potential investment opportunities. Analyze the
                      performance history, market trends, and economic
                      indicators relevant to the investment. Understanding the
                      fundamentals and assessing the future outlook of an
                      investment can help you make informed decisions and reduce
                      potential risks.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>

              <Grid>
                <Card>
                  <Card.Body>
                    <Text h2 size={24}>
                      Importance of starting early:
                    </Text>
                    <Text h2 css={{ fontWeight: "$normal" }} size={24}>
                      Starting early in your investment journey is one of the
                      most powerful advantages you have. The concept of
                      compounding allows your investments to grow not only based
                      on your initial contributions but also on the returns
                      generated over time. The longer your money remains
                      invested, the more it has the potential to grow
                      exponentially. Starting early gives you the advantage of
                      time, which can make a significant difference in your
                      investment outcomes over the long run.
                    </Text>
                  </Card.Body>
                </Card>
              </Grid>
            </Grid.Container>
          </Container>
          <Text h2 css={{ fontWeight: "$normal" }} size={30}>
            In conclusion, investing is a key aspect of financial planning that
            can lead to wealth accumulation and financial independence.
            Understanding different investment options, considering risk and
            return, and conducting thorough research are vital to making sound
            investment decisions. Moreover, starting early can exponentially
            enhance your investment growth through the power of compounding. By
            applying these principles, you can set yourself on a path towards
            achieving your financial goals and securing a prosperous future.
          </Text>
        </Container>
        <Spacer y={2} />
        <Row>
          <Link to="/Dashboard/Modules/Credit">
            <Button> Back </Button>
          </Link>
          <Spacer x={35} />
          <Link to="/Dashboard/Modules">
            <Button className="next-btn"> Finish </Button>
          </Link>
        </Row>
      </Box>
    </>
  );
};

export default ModulesInvesting;
