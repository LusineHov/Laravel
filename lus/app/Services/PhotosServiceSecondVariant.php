<?php
namespace App\Services;

use App\Contracts\PhotosServiceInterface;

class PhotosServiceSecondVariant implements PhotosServiceInterface
{
	public function __construct(Picture $photo)
	{
		$this->photo = $photo;
	}


	public function getAllPhotos()
	{
		$photos = $this->photo->all();
		echo 'variant';
		return $photos;
	}

	public function getAllPhotosByID()
	{

		echo '2 variant id';
	}
}