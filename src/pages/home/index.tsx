/**
 *  Created by pw on 2020/9/20 3:51 下午.
 */
import React, { useEffect, useState } from 'react';
import './index.less';
import Shuffing from '@/components/shuffling';
import Recommend from '@/pages/home/Recommend';
import HotRecommend from '@/pages/home/HotRecommend';
import Advantage from '@/pages/home/Advantage';
import HomeData from '@/pages/home/HomeData';
import Partners from '@/pages/home/Partners';
import { getBanners, getHotPots, getLogos } from '@/services';

export default () => {
  const [banners, setBanner] = useState<API.Home_Banner[]>([]);
  const [hotPots, setHotPots] = useState<API.Home_HotPots[]>([]);
  const [logos, setLogos] = useState<API.Home_Logos[]>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const banners = await getBanners();
    setBanner(banners);
    const hotPots = await getHotPots();
    setHotPots(hotPots);
    const logos = await getLogos();
    setLogos(logos);
    // const recommends = await getRecommends();
    // setRecommends(recommends);
  };

  return (
    <div className="home-wrapper">
      <Shuffing banners={banners} />
      <Recommend />
      <HotRecommend data={hotPots} />
      <Advantage />
      <HomeData />
      <Partners logos={logos} />
    </div>
  );
};
