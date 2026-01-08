from airflow import DAG
from airflow.operators.dummy import DummyOperator
from datetime import datetime

with DAG('daily_data_sync', start_date=datetime(2024, 1, 1), schedule_interval='@daily') as dag:
    start_task = DummyOperator(task_id='start_data_fetch')
    process_task = DummyOperator(task_id='process_records')
    end_task = DummyOperator(task_id='upload_to_gcp')

    start_task >> process_task >> end_task
