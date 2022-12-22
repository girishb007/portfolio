$(document).ready(function() {
  // MODAL
  var modalText = {
    discover: {
      title: 'BLURB',
      tag: 'An influence marketing platform that connects brands to influencers.',
      detail:
        'Blurb is among the best venues for connecting together influencers and brands. By using our sophisticated social network algorithm to select current influencers based on demands and reach, marketers may also execute a variety of campaigns in the targeted area with the help of our onboarded influencer marketing network.',
      link: 'https://github.com/girishb007/Blurb-InfluenceMarketingApp'
    },
    ordering: {
      title: 'MEDISEC',
      tag: 'Blockchain Based Ecosystem to overcome problems of Fake Drugs in Pharma Industry.',
      detail:
        'MediSec is a Ecosystem including blockchain portal for supplychain stakeholder and an responsive android application for retails and consumers to overcome the problem of wastage and counterfiet medicines in Pharmacutical Industry. ',
      link: 'https://play.google.com/store/apps/details?id=com.nutout.medisec'

    },
    newrelic: {
      title: 'CAMPUS SECURITY CLOUD ROBOT',
      tag: 'Robot Simulation hosted on AWS Cloud to enhance the Security in Campus.',
      detail:
        'This project provides the infrastructure parts and source code needed to install a highly available, scalable campus security robot to improve campus security. To provide all of the aforementioned services for a group of mobile robots, we have developed a cloud-based platform integrated with virtual robot environment (AWSRoboMaker/Webots) that will facilitate communication between the robots and a cloud server.',
      link: 'https://github.com/girishb007/Campus-Security-Robot'
    },
    roambi: {
      title: 'BAY AREA BIKE PREDICTOR',
      tag: 'The goal for this project is to use machine learning approaches to forecast bike demand for cities in BayArea.',
      detail:
        'Algorithms Used on the dataset: Random Forest Regression | ExtraTrees Regression | XGBoost | KNN | Lasso Linear Regression | Gradient Boosting',
      link: 'https://www.kaggle.com/datasets/benhamner/sf-bay-area-bike-share?datasetId=57&sortBy=voteCount'
    },
    walker: {
      title: 'CROSS DOMAIN MARKETPLACE',
      tag: 'One step go eCommerece platform that brings products and services from several internet shops.',
      detail:
        'An online market place which combines the services and products from different online stores and provides a single eCommerce platform to users to buy products/services from any of the component websites.',
        link: 'https://github.com/girishb007/CMPE272-MarketPlace'
    },
    powur: {
      title: 'HOTEL MANAGEMENT SYSTEM',
      tag: 'HMS System built as part of Undergrad assignments.',
      detail:
        'This hotel management application can be used to manage tasks including keeping track of client information, reserving rooms of four distinct types, ordering food for specific rooms, unreserving rooms, and displaying the bill. Additionally, it can be utilized to view various room amenities and room availability. The application is menu-driven and runs until the user closes it.',
      link: 'https://github.com/girishb007/Hotel-management-System'
    },
    mystand: {
      title: 'Netflix-Clone',
      tag: 'Simulation of Netflix with all feature including 200 plus movies and payments.',
      detail:
        'Netflix app using Redux, React (hooks, router-dom, dom), Firebase w/ Stripe intergrated, Axios, TMDB API, Youtube API, and MovieTrailer API.',
        link : 'https://github.com/girishb007/Netflix-Simmulation'
    },
    never: {
      title: 'RESEARCH WORK',
      tag: 'Here are a couple of my research work on topics that intrigues me.',
      detail:
        '1. Securing Resources for Decentralized Cloud Storage   (Storj.io, FileCoin , SiaCoin).  |  2. Cryptocurrency - Reminiscent of Dot Com Bubble or Emergence of a New Paradigm in Decentralized Finance',
        link : 'https://www.researchgate.net/profile/Girish-Bisane'

    },
    themall: {
      title: 'LeetCode to Github Chrome Extension',
      tag: 'A Chrome extension to push leetcode solved code to Github without any hassle.',
      detail:
        'This Chrome Extension automatically pushes the solved Leetcode problems in Github Repo when you pass all test cases for given problem. ',
        link : 'https://github.com/girishb007/Netflix-Simmulation'
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });


  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
