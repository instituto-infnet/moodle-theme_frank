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
 * A three column layout for the Bootstrapbase theme.
 *
 * @package   theme_bootstrapbase
 * @copyright 2012 Bas Brands, www.basbrands.nl
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

$regionmainbox = 'span9 desktop-first-column';
$regionmain = 'span8 pull-right';
$sidepre = 'span4 desktop-first-column';
$sidepost = 'span3 pull-right';
$uri_parts = explode('?', $_SERVER['REQUEST_URI'], 2);

echo $OUTPUT->doctype() ?>
<html <?php echo $OUTPUT->htmlattributes(); ?>>
<head>
    <title><?php echo $OUTPUT->page_title(); ?></title>
    <link rel="shortcut icon" href="<?php echo $OUTPUT->favicon(); ?>" />
    <?php echo $OUTPUT->standard_head_html() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="<?php echo $OUTPUT->favicon(); ?>" />
    <link rel="stylesheet" href="https://lms.infnet.edu.br/framework2/src/css/pl-grid.css">
    <link rel="stylesheet" href="https://lms.infnet.edu.br/framework2/src/css/plui.css">
    <link rel="stylesheet" href="<?php echo $CFG->wwwroot . '/theme/frank/javascript/fluidbox/css/fluidbox.css' ?>">
    <link rel="stylesheet" href="<?php echo $CFG->wwwroot . '/theme/frank/style/bigfoot-bottom.css' ?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.8.0/styles/monokai.min.css">
</head>

<body <?php echo $OUTPUT->body_attributes(); ?> data-footnote-style="bottom">

<?php echo $OUTPUT->standard_top_of_body_html() ?>

<header role="banner" class="navbar navbar-fixed-top moodle-has-zindex">
    <nav role="navigation" class="navbar-inner">
        <div class="container-fluid">
            <a class="brand" href="<?php echo $CFG->wwwroot;?>"><?php echo
                format_string($SITE->shortname, true, array('context' => context_course::instance(SITEID)));
                ?></a>
            <?php echo $OUTPUT->navbar_button(); ?>
            <?php echo $OUTPUT->user_menu(); ?>
            <?php echo $OUTPUT->search_box(); ?>
            <div class="nav-collapse collapse">
                <?php echo $OUTPUT->custom_menu(); ?>
                <ul class="nav pull-right">
                    <li><?php echo $OUTPUT->page_heading_menu(); ?></li>
                </ul>
            </div>
        </div>
    </nav>
</header>

<?php echo $OUTPUT->full_header(); ?>

<div id="page" class="container-fluid">
    <div id="page-content" class="row-fluid">
        <div id="region-main-box" class="<?php echo $regionmainbox; ?>">
            <div class="row-fluid">
                <section id="region-main" class="<?php echo $regionmain; ?>">
                    <?php
                    echo $OUTPUT->course_content_header();
                    echo $OUTPUT->main_content();
                    echo "<div class='activity_navigation'>";
                    echo $OUTPUT->activity_navigation();
                    echo "</div>";
                    echo $OUTPUT->course_content_footer();
                    ?>
                </section>
                <?php echo $OUTPUT->blocks('side-pre', $sidepre); ?>
            </div>
        </div>
        <?php echo $OUTPUT->blocks('side-post', $sidepost); ?>
    </div>

    <footer id="page-footer">
        <a href="#page-header" class="back-top"><i class="fa fa-arrow-up"></i></a>
        <div id="course-footer"><?php echo $OUTPUT->course_footer(); ?></div>
        <p class="helplink"><?php echo $OUTPUT->page_doc_link(); ?></p>
        <?php
        echo $OUTPUT->login_info();
        echo $OUTPUT->home_link();
        echo $OUTPUT->standard_footer_html();
        ?>
    </footer>

    <?php echo $OUTPUT->standard_end_of_body_html() ?>

    <?php
    $folder = theme_frank_moodle_folder($CFG->wwwroot);

    $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/incourse.js'));

    if ($uri_parts[0] == '/'.$folder.'/mod/page/view.php') {
      $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/fokus.min.js'));
      $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/highlight/highlight.pack.js'));
      $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/fluidbox/jquery.fluidbox.js'));
      $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/bigfoot/bigfoot.js'));
      $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/inits.js'));
    } else if ($uri_parts[0] == '/'.$folder.'/mod/assign/view.php') {
      $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/bigfoot/bigfoot.js'));
      $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/highlight/highlight.pack.js'));
      $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/inits-highlight.js'));
      $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/rubric.js'));
    } else if ($uri_parts[0] == '/'.$folder.'/mod/quiz/attempt.php') {
      $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/highlight/highlight.pack.js'));
      $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/inits-highlight.js'));
    } else if ($uri_parts[0] == '/'.$folder.'/report/competency/index.php') {
      $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/reportcompetency.js'));
    } else if ($uri_parts[0] == '/'.$folder.'/admin/tool/lp/coursecompetencies.php' ||
               $uri_parts[0] == '/'.$folder.'/report/coursecompetencies/index.php') {
      $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/bigfoot/bigfoot.js'));
      $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/coursecompetencies.js'));
    } else if ($uri_parts[0] == '/'.$folder.'/mod/attendance/take.php') {
      $PAGE->requires->js( new moodle_url($CFG->wwwroot . '/theme/frank/javascript/attendance.js'));
    } else {
      //silence is golden
    }
    ?>
</div>
<?php include_once("analyticstracking.php") ?>
</body>
</html>
