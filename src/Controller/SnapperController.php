<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SnapperController extends AbstractController
{
    #[Route('/snap', name: 'app_snapper')]
    public function index(): Response
    {
        return $this->render('snapper/index.html.twig',['props'=>['one']]);
    }
}
