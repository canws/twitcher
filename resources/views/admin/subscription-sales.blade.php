@extends('admin.base')

@section('section_title')
<strong>{{ __('Subscription Sales') }}</strong>
@endsection

@section('section_body')
@if ($sales->isNotEmpty())
<table class="table border-collapse w-full bg-white text-stone-600 dataTable">
    <thead>
        <tr>
            <x-th>{{ __('ID') }}</x-th>
            <x-th>{{ __('Subscription Plan') }}</x-th>
            <x-th>{{ __('Username') }}</x-th>
            <x-th>{{ __('Subscription Amount') }}</x-th>
            <x-th>{{ __('Gateway') }}</x-th>
            <x-th>{{ __('Date') }}</x-th>
            <x-th>{{ __('Expire Date') }}</x-th>
        </tr>
    </thead>
    <tbody>
        @foreach ($sales as $s)
        <tr>
            <x-td>
                <x-slot name="field">{{ __('ID') }}</x-slot>
                {{ $s->id }}
            </x-td>
            <x-td>
                <x-slot name="field">{{ __('Subscription Plan') }}</x-slot>
                {{ $s->subscription_plan }} {{-- Adjust this field based on your database --}}
            </x-td>
            <x-td>
                <x-slot name="field">{{ __('Username') }}</x-slot>
                {{ $s->name }}
            </x-td>
            <x-td>
                <x-slot name="field">{{ __('Subscription Amount') }}</x-slot>
                <span class="px-2 py-0.5 bg-cyan-600 text-white rounded-lg">
                    {{ opt('payment-settings.currency_symbol') . $s->price }}
                </span>
            </x-td>
            <x-td>
                <x-slot name="field">{{ __('Gateway') }}</x-slot>
                {{ $s->gateway }}
            </x-td>
            <x-td>
                <x-slot name="field">{{ __('Date') }}</x-slot>
                {{ $s->created_at->toDateString() }}
            </x-td>
             <x-td>
                <x-slot name="field">{{ __('Expire Date') }}</x-slot>
                {{ \Carbon\Carbon::parse($s->expire_date)->format('Y-m-d') }}
            </x-td>
            
        </tr>
        @endforeach
    </tbody>
</table>
@else
<div class="bg-white p-3 rounded">{{ __('No Subscription Plan sold') }}</div>
@endif
@endsection

@section('extra_bottom')
@if ($errors->any())
<div class="alert alert-danger">
    <ul>
        @foreach ($errors->all() as $error)
        <li>{{ $error }}</li>
        @endforeach
    </ul>
</div>
@endif
@endsection

@push('adminExtraJS')
<script src="{{ asset('js/jquery.min.js') }}"></script>
<script src="{{ asset('js/datatables/datatables.min.js') }}"></script>
<script>
    $('.dataTable').dataTable({ordering:false});
</script>
@endpush
