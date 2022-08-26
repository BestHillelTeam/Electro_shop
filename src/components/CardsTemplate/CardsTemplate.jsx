import React from 'react';
import './Cards.scss';
import Card from './Cards/Card'

export default function CardsTemplate() {
  return (
    <div className="section">
			<div className="container">
				<Card></Card>
			</div>
		</div>
  )
}
