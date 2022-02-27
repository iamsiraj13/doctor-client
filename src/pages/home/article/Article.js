import React from 'react';
import './Article.css';
import people1 from '../../../assets/images/people-1.png'
import people2 from '../../../assets/images/people-2.png'
import people3 from '../../../assets/images/people-3.png'
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';

const Article = () => {
    return (
        <Box sx={{ flexGrow: 1, py: "50px" }}>
        <Container>
          <div className="section_title" style={{textAlign:'center'}}>
            <h4>Our Blog</h4>
            <h2>From Our Blog News</h2>
          </div>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={4}>
              <div className="article">
                <div className="article__author">
                  <img src={people1} alt="" />
                  <div className="article__author_info">
                    <h5>Winson herry</h5>
                    <p className="company">23 April, 2022</p>
                  </div>
                </div>
                <div className="article__text">
                    <h4>2 times of brush in a day can keep you healthy</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit vitae, nobis corporis praesentium voluptas tempora laboriosam reiciendis expedita maiores.</p>
                </div>
              </div>
            </Grid> 
            <Grid item xs={4} sm={4} md={4}>
              <div className="article">
                <div className="article__author">
                  <img src={people2} alt="" />
                  <div className="article__author_info">
                    <h5>Winson herry</h5>
                    <p className="company">California</p>
                  </div>
                </div>
                <div className="article__text">
                    <h4>The tooth cancer is taking a challenge</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit vitae, nobis corporis praesentium voluptas tempora laboriosam reiciendis expedita maiores.</p>
                </div>
              </div>
            </Grid> 
            <Grid item xs={4} sm={4} md={4}>
              <div className="article">
                <div className="article__author">
                  <img src={people3} alt="" />
                  <div className="article__author_info">
                    <h5>Winson herry</h5>
                    <p className="company">California</p>
                  </div>
                </div>
                <div className="article__text">
                    <h4>Check at least a doctor in a year for your teath</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit vitae, nobis corporis praesentium voluptas tempora laboriosam reiciendis expedita maiores.</p>
                </div>
              </div>
            </Grid> 
          </Grid>
        </Container>
      </Box>
    );
};

export default Article;