<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * The one column layout.
 *
 * @package   theme_frankenstein
 * @copyright 2013 Moodle, moodle.org
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

echo $OUTPUT->doctype() ?>
<html <?php echo $OUTPUT->htmlattributes(); ?>>
<head>
  <title><?php echo $OUTPUT->page_title(); ?></title>
  <link rel="shortcut icon" href="<?php echo $OUTPUT->favicon(); ?>" />
  <?php echo $OUTPUT->standard_head_html() ?>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
  .comunicado-modal {
    width: 617px;
    height: 640px;
    margin-left: -308px;
  }
  .comunicado-modal__overflow {
    overflow-y: scroll;
    height: 600px;
  }
  .comunicado-modal footer {
    height: 40px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: red;
  }

  .comunicado-modal footer label  {
    display: block;
    padding-left: 175px;
    padding-top: 10px;
    text-indent: 0;
    position: initial;
    color: rgba(255, 255, 255, .87);
    font-weight: 300;
  }
  </style>
</head>

<body <?php echo $OUTPUT->body_attributes(); ?>>

  <div id="wrapper">
   <?php echo $OUTPUT->standard_top_of_body_html() ?>

     <div id="page" class="container-fluid">
       <div id="page-content" class="row-fluid cf">
         <section id="region-main" class="login col-centered">
           <?php
            echo $OUTPUT->main_content();
           ?>
        </section>
     </div>

   <footer id="page-footer">
      <?php
      echo $html->footnote;
      echo $OUTPUT->login_info();
      echo $OUTPUT->home_link();
      echo $OUTPUT->standard_footer_html();
      ?>
      <p>Ainda não tem sua senha? Visite nossa secretaria.</p>
      <ul class="login-footer">
         <li><a href="http://www.infnet.edu.br/infnet/">Instituto</a></li>
         <li><a href="http://lms.infnet.edu.br/manual-do-lms-personalized-learning.pdf">Manual de Introdução ao LMS</a></li>
         <li><a href="mailto:suporte@infnet.edu.br">Suporte</a></li>
      </ul>
      <address>
      Sede do Instituto Infnet | Rua São José , 90 - Centro<br>
      Tel: 21 2122-8800
      </address>
   </footer>

  <?php echo $OUTPUT->standard_end_of_body_html() ?>

  <!-- <div id="modal" class="comunicado-modal" style="display: block;">
    <button class="fechar">X</button>
    <div class="comunicado-modal__overflow">
      <img src="http://i.imgur.com/5lV4bd8.png" alt="" width="600" height="1405" usemap="#Map"/>
      <map name="Map">
        <area shape="rect" coords="356,1291,590,1350" href="http://www.festivaldorio.com.br" target="_blank"><area shape="rect" coords="82,1153,504,1212" href="http://www.riomarket.com.br" target="_blank">
        <area shape="rect" coords="120,81,492,260" href="http://www.riomarket.com.br" target="_blank">
      </map>
    </div>
    <footer>
      <label for="check"><input type="checkbox" id="check">Não exibir esta mensagem novamente</label>
    </footer>
  </div> -->
  <?php //$PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frankenstein/javascript/modal.js')); ?>
  <?php include_once("analyticstracking.php") ?>

</body>
</html>
