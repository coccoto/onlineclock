<?php

namespace app\views;

final class IndexView extends CommonView {

    public function __construct() {

        parent::__construct();

        $this->indexMethod();
    }

    private function indexMethod() {

        $this->html->setStyle('css/*');
        $this->html->setScript('dist/*');
    }
}